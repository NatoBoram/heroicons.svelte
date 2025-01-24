<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShieldExclamationSvelte from '../../../lib/20/solid/shield-exclamation.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ShieldExclamationSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ShieldExclamation" />
