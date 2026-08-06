<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShieldExclamationSvelte from '../../../lib/16/solid/shield-exclamation.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ShieldExclamationSvelte,
		args: { class: '' },
	})
</script>

<Story name="ShieldExclamation" />
