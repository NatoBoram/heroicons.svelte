<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShieldCheckSvelte from '../../../lib/24/solid/shield-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ShieldCheckSvelte,
		args: { class: '' },
	})
</script>

<Story name="ShieldCheck" />
