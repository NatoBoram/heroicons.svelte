<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShieldExclamationSvelte from '../../../lib/16/solid/shield-exclamation.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ShieldExclamationSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ShieldExclamation" />
