<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShieldCheckSvelte from '../../../lib/16/solid/shield-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ShieldCheckSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ShieldCheck" />
