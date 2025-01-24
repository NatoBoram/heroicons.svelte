<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TrophySvelte from '../../../lib/20/solid/trophy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: TrophySvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Trophy" />
