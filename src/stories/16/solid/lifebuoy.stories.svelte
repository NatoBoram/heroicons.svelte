<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LifebuoySvelte from '../../../lib/16/solid/lifebuoy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: LifebuoySvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Lifebuoy" />
