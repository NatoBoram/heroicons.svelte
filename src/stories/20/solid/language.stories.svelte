<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LanguageSvelte from '../../../lib/20/solid/language.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: LanguageSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Language" />
