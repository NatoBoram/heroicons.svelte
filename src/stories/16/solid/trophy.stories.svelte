<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TrophySvelte from '../../../lib/16/solid/trophy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: TrophySvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Trophy" />
