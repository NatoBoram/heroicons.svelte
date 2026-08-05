<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShieldExclamationSvelte from '../../../lib/24/solid/shield-exclamation.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ShieldExclamationSvelte,
		args: { class: '' },
	})
</script>

<Story name="ShieldExclamation" />
