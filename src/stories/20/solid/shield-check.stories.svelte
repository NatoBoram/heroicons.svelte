<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShieldCheckSvelte from '../../../lib/20/solid/shield-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ShieldCheckSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ShieldCheck" />
