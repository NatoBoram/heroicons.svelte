<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LifebuoySvelte from '../../../lib/20/solid/lifebuoy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: LifebuoySvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Lifebuoy" />
