<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShieldCheckSvelte from '../../../lib/24/solid/shield-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ShieldCheckSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ShieldCheck" />
